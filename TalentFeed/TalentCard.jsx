import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Popup, Icon, Card, Label, Button, Menu, Dropdown } from 'semantic-ui-react'
import Cookies from 'js-cookie'

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            position : null,
            increment : 50

        }
       

        this.forTesting = this.forTesting.bind(this)
        this.GetData = this.GetData.bind(this)
        //this.handleDropdownChange = this.handleDropdownChange.bind(this)
        
        this.GetData()
    };

    
    GetData()
    {
        const data = {
            Position : 1,
            Number : 650
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


    // handleDropdownChange(event, {value})
    // {
    //     console.log(value+' Rows')

    //     this.setState({
    //         increment : value
    //     })

    //     this.GetData()
    // }


    forTesting()
    {
        console.log('Testing')
    }

    render() { 

        // const perPage = [

        //     {
        //         key : 10,
        //         text : 10,
        //         value : 10
        //     },

        //     {
        //         key : 20,
        //         text : 20,
        //         value : 20
        //     },

        //     {
        //         key : 30,
        //         text : 30,
        //         value : 30
        //     }
        // ]


        return(
            <div>
            {/* <b>Talents per page: </b>
            <Dropdown
                selection
                options={perPage}
                placeholder = 'Please select'
                value = {this.state.increment}
                onChange = {this.handleDropdownChange}
            /> */}

            <Card fluid>
                <Card.Content>

                    <Card.Header>

                        <h4 align = 'left'>Testing</h4><Label corner = 'right'><Icon name = 'star' /></Label>
                        
                    </Card.Header>

                    <Card.Description>

                        <video width='100%' height='100%' controls/>

                        {/* <Button.Group>
                            <Button><Icon name = 'user'/></Button>
                            <Button><Icon name = 'user'/></Button>
                            <Button><Icon name = 'user'/></Button>
                        </Button.Group> */}
                        <Menu secondary widths = {4}>
                            <Menu.Item 
                                icon = 'user'
                                onClick = {this.forTesting}
                            />
                            <Menu.Item 
                                icon = 'file pdf'
                                onClick = {this.forTesting}
                            />
                            <Menu.Item 
                                icon = 'linkedin'
                                onClick = {this.forTesting}
                            />
                            <Menu.Item 
                                icon = 'github'
                                onClick = {this.forTesting}
                            />
                        </Menu>

                    </Card.Description>

                    

                </Card.Content>

                <Card.Content extra>
                    <Label basic>C#</Label>
                    <Label basic>Linq</Label>
                </Card.Content>

            </Card>
            </div>
        )
       
    }
}

