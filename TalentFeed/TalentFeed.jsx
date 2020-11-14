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
            haveTalents: false,
            companyDetails: null
        }

        this.init = this.init.bind(this);
        this.noTalentFound = this.noTalentFound.bind();

        this.Testing = this.Testing.bind(this)

    };

    init() {
        let loaderData = TalentUtil.deepCopy(this.state.loaderData)
        loaderData.isLoading = false;
        this.setState({ loaderData });//comment this
    }

    componentDidMount() {
        //window.addEventListener('scroll', this.handleScroll);
        this.init()
    };



    noTalentFound()
    {

        return(

            <h5>There are no talents found for your recruitment company</h5>

        )

    }

 
    Testing()
    {
        const data = {
            Position : 5,
            Number : 5
        }

        var cookies = Cookies.get('talentAuthToken');

        $.ajax({

            url: 'http://localhost:60290/profile/profile/GetTalentSnapshots',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': "application/json"
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            data: data,
            success: function (res) {

                //console.log(res.employer)

                res ? console.log(res) : console.log('Nothing returned')


            }.bind(this),
            error: function(res)
            {
                console.log(res)
            }
        })

    }
    
   
    render() {

        return (
            <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>

                <div className="ui container" style = {{height : 900, margin :50}}>
                    
                    {/* <Grid divided='vertically'> */}
                    <Grid relaxed columns = {3}>
                    
                        <div id = 'companyProfile'>
                            <CompanyProfile />
                        </div>
                        
                        <div id = 'talentInfo' style = {{height : 900, width : 500}}>
                            {this.state.haveTalents == true ? this.noTalentFound() : <TalentCard />}
                        </div>

                        <div id = 'suggestionFollow'>
                            <FollowingSuggestion />
                        </div>
                    
                    </Grid>

                    <Button 
                        content = 'Testing'
                        onClick = {this.Testing}
                    />
                
                </div>
                
            </BodyWrapper>
        )
    }
}