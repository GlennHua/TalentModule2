import React from 'react';
import { Popup, Icon, Card, Label, Item, Image } from 'semantic-ui-react'


export default class FollowingSuggestion extends React.Component {

    constructor(props) {
        
        super(props)
    
        this.state = {
             
        }

        this.dummy = this.dummy.bind(this)
        this.suggestion =this.suggestion.bind(this)

    }
    
 

    dummy()
    {
        return (
            <div className="content">
                <div className="center aligned header">Follow Talent</div>
                <div className="ui items following-suggestion">
                    <div className="item">
                        <div className="ui image">
                            <img className="ui circular image" src="http://semantic-ui.com/images/avatar/small/jenny.jpg" />
                        </div>
                        <div className="content">
                            <a className="">Veronika Ossi</a>
                            <button className="ui primary basic button"><i className="icon user"></i>Follow</button>
                        </div>
                    </div>
                    
                    <div className="item">
                        <div className="ui image">
                            <img className="ui circular image" src="http://semantic-ui.com/images/avatar/small/jenny.jpg" />
                        </div>
                        <div className="content">
                            <a className="">Veronika Ossi</a>
                            <button className="ui primary basic button"><i className="icon user"></i>Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    suggestion()
    {

        return(

            <div>

            <Card>
                <Card.Content>
                    <Card.Header> 
                        <div className="center aligned header"><h4>Follow Talent</h4></div> 
                    </Card.Header>
                    <Card.Description>
                        <Item.Group>
                            
                            <Item>
                                <Image circular src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'/>
                                <Item.Content>
                                    <div className="content">
                                        <a className="">Veronika Ossi</a><br/>
                                        <button className="ui primary basic button"><i className="icon user"></i>Follow</button>
                                    </div>
                                </Item.Content>
                            </Item>

                            <Item>
                                <Image circular src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'/>
                                <Item.Content>
                                    <div className="content">
                                        <a className="">Veronika Ossi</a><br/>
                                        <button className="ui primary basic button"><i className="icon user"></i>Follow</button>
                                    </div>
                                </Item.Content>
                            </Item>

                        </Item.Group>
                    </Card.Description>
                </Card.Content>
            </Card>

            </div>

        )
    }




    render() {


        return(

            <div>
                {this.suggestion()}
            </div>
        )
        
    }
}