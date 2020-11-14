import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import TalentCard from '../TalentFeed/TalentCard.jsx';
import { Button, Grid, Loader } from 'semantic-ui-react';
import CompanyProfile from '../TalentFeed/CompanyProfile.jsx';
import FollowingSuggestion from '../TalentFeed/FollowingSuggestion.jsx';
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx';

export default class TalentFeed extends React.Component {
    constructor(props) {
        super(props);

        let loader = loaderData
        loader.allowedUsers.push("Employer")
        loader.allowedUsers.push("Recruiter")

        this.state = {
            loadNumber: 5,
            loadPosition: 0,
            feedData: [],
            watchlist: [],
            loaderData: loader,
            haveTalents: null,
            companyDetails: null,

            feed : {
                Position : 1,
                Number : 10
            },

            talents : []
        }

        this.init = this.init.bind(this);
        this.noTalentFound = this.noTalentFound.bind();

        this.GetData = this.GetData.bind(this)
        this.applyPageLimit = this.applyPageLimit.bind(this)

    };

    init() {
        let loaderData = TalentUtil.deepCopy(this.state.loaderData)
        loaderData.isLoading = false;
        this.setState({ loaderData });//comment this
    }

    componentDidMount() {
        //window.addEventListener('scroll', this.handleScroll);
        this.init()
        this.GetData()
    };



    noTalentFound()
    {

        return(

            <h5>There are no talents found for your recruitment company</h5>

        )

    }



    applyPageLimit(feed)
    {
        //console.log(feed)

        //const data = Object.assign({}, feed)
        this.setState({
            feed : feed
        }, this.GetData)

    }

 

    GetData()
    {
        var cookies = Cookies.get('talentAuthToken');

        $.ajax({

            url: 'http://module2api-profile.azurewebsites.net/profile/profile/GetTalentSnapshots',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': "application/json"
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            data: this.state.feed,
            success: function (res) {

                console.log(res)

                res ? 
                this.setState({talents : res.data})
                : this.setState({haveTalents : false})

                console.log(this.state.talents)

            }.bind(this),
            error: function(res)
            {
                console.log(res)
            }
        })
    }


    
   
    render() {

        const talents = this.state.talents

        return (
            <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>

                <div className="ui container" style = {{height : 900, margin :50}}>
                    
                    {/* <Grid divided='vertically'> */}
                    <Grid relaxed columns = {3}>
                    
                        <div id = 'companyProfile'>
                            <CompanyProfile />
                        </div>
                        
                        <div id = 'talentInfo' style = {{height : 900, width : 500, overflow : "hidden", overflowY : scroll()}}>
                            {this.state.haveTalents == false ? this.noTalentFound() : 
                            <TalentCard 
                                controlFunc = {this.applyPageLimit}
                                talents = {talents}
                            />}
                        </div>

                        <div id = 'suggestionFollow'>
                            <FollowingSuggestion />
                        </div>
                    
                    </Grid>
                
                </div>
                
            </BodyWrapper>
        )
    }
}