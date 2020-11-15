import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Popup, Icon, Card, Label, Button, Menu, Dropdown } from 'semantic-ui-react'
import Cookies from 'js-cookie'
import TalentCardDetail from './TalentCardDetail.jsx'

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            position : null,
            increment : 10

        }
       

        this.forTesting = this.forTesting.bind(this)
       
        this.handleDropdownChange = this.handleDropdownChange.bind(this)
    };



    handleDropdownChange(event, {value})
    {
        console.log(value+' Rows')

        this.setState({
            increment : value
        })

        //this.GetData()
        
        const data = {
            Position : 1,
            Number : value
        } 

        this.props.controlFunc(data)
    }


    forTesting()
    {
        console.log('Testing')
    }

    render() { 

        const perPage = [

            {
                key : 10,
                text :'10 Talents',
                value : 10
            },

            {
                key : 20,
                text : '20 Talents',
                value : 20
            },

            {
                key : 30,
                text : '30 Talents',
                value : 30
            },

            {
                key : 800,
                text : 'All Talents',
                value : 800
            },
        ]

        const talentList = this.props.talents
        //console.log(talentList.length)
        

        return(
            <div>
            <b>Current displaying talents:  </b>
            <Dropdown
                selection
                options={perPage}
                placeholder = 'Please select'
                value = {this.state.increment}
                onChange = {this.handleDropdownChange}
            />

            {talentList.map(
                (talent, key)=>{

                    return(
                        <Card fluid key={key}>
                            <Card.Content>

                                <Card.Header>

                                    <h4 align = 'left'>{talent.name}</h4><Label corner = 'right'><Icon name = 'star' /></Label>
                                    
                                </Card.Header>

                                {/* <Card.Description>

                                    <video width='100%' height='100%' controls/>

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

                                </Card.Description> */}
                                <TalentCardDetail 
                                    visa = {talent.visa}
                                    currentEmployment = {talent.currentEmployment}
                                    level = {talent.level}
                                    linkedIn = {talent.linkedIn}
                                    github = {talent.github}
                                />

                                

                            </Card.Content>

                            <Card.Content extra>

                                {talent.skills.length ==0 ? <Label basic>For Demo--In Case no Skills</Label>
                                
                                :
                            
                                talent.skills.map(
                                    (skill, key)=>{
                                        return(
                                        <Label basic key={key}>{skill}</Label>
                                        )
                                    }
                                )
                                }

                                {/* <Label basic>For Demo--In Case no Skills</Label>
                                {talent.skills.map(
                                    (skill, key)=>{
                                        return(
                                        <Label basic key={key}>{skill}</Label>
                                        )
                                    }
                                )} */}

                            </Card.Content>

                        </Card>
                    )
                }
            )}
  
            </div>
        )
       
    }
}

