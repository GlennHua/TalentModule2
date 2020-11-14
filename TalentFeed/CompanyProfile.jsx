import React from 'react';
import Cookies from 'js-cookie';
import { Card, Icon, Loader, Image } from 'semantic-ui-react';

export default class CompanyProfile extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            companyInfo : {}
        }


        this.getCompanyInfo = this.getCompanyInfo.bind(this)

        this.getCompanyInfo()

    }


    getCompanyInfo()
    {
        var cookies = Cookies.get('talentAuthToken');

        $.ajax({

            url: 'http://localhost:60290/profile/profile/getEmployerProfile',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': "application/json"
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res) {

                //console.log(res.employer)

                res ? console.log(res.employer) : console.log('Nothing returned')

                this.setState({
                    companyInfo : res.employer
                })


            }.bind(this),
            error: function(res)
            {
                console.log(res)
            }
        })

    }






    render() {   

        const companyInfo = Object.assign({}, this.state.companyInfo.companyContact)
        console.log(companyInfo)
        const location = Object.assign({}, companyInfo.location)
        console.log(location)
        
        return(

            <Card>

                <Card.Content>

                    <Card.Description>
                        <div align = 'center'>
                            <Image 
                                src = 'https://react.semantic-ui.com/images/wireframe/image.png'
                                size = 'tiny'
                                circular
                                //avatar
                                centered
                            />
                            <h4>{companyInfo.name}</h4>
                            <Card.Meta>
                                <h5>
                                <Icon name = 'marker'/>{location.country}, {location.city}
                                </h5>
                            </Card.Meta>
                            <h4>We currently do not have specific skills that we desire</h4>

                        </div>
                    </Card.Description>

                </Card.Content>

                <Card.Content extra>
                    <p><Icon name = 'phone'/>: {companyInfo.phone}</p> 
                    <p><Icon name = 'mail' />: {companyInfo.email}</p>
                </Card.Content>

            </Card>
        )
        
    }
}