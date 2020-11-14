import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import {Card, Menu, Item, Image, Grid, List} from 'semantic-ui-react';  

export default class TalentCardDetail extends React.Component {

    constructor(props) {

        super(props)
    
        

        this.state = {

            defaultView : true
             
        }

        this.renderDefaultView = this.renderDefaultView.bind(this)
        this.renderDetails = this.renderDetails.bind(this)
        this.goToDetails = this.goToDetails.bind(this)
        this.goToDefault = this.goToDefault.bind(this)

    }
    

    goToDetails(event)
    {
        this.setState({
            defaultView : false
        })
    }


    goToDefault(event)
    {
        this.setState({
            defaultView : true
        })
    }


    renderDefaultView()
    {
        return(

            <Card.Description>

                <video width='100%' height='100%' controls/>

                <Menu secondary widths = {4}>
                    <Menu.Item 
                        icon = 'user'
                        onClick = {this.goToDetails}
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
        )
    }



    renderDetails()
    {

        return( 

            <Card.Description>

                <Grid columns = {2}>
                    <Grid.Column>
                        <Image src = {'https://react.semantic-ui.com/images/avatar/large/matthew.png'}/>
                    </Grid.Column>

                    <Grid.Column>
                        <h4>Talent Snapshot</h4>
                            <List>
                                <List.Item>
                                    <List.Header>Current Employer</List.Header>Unknown
                                </List.Item>

                                <List.Item>
                                    <List.Header>Visa Status</List.Header>{this.props.visa ? <p>{this.props.visa}</p> : <p>Unknown</p>}
                                </List.Item>
                            
                                <List.Item>
                                    <List.Header>Position</List.Header>Unknown
                                </List.Item>

                            </List>
                    </Grid.Column>

                </Grid>

                <Menu secondary widths = {4}>
                    <Menu.Item 
                        icon = 'video camera'
                        onClick = {this.goToDefault}
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

        )

    }

    
    render() {


        return(

            this.state.defaultView ? this.renderDefaultView() : this.renderDetails()

        )
        
    }



}