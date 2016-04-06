import React from 'react';
import ReactDOM from 'react-dom';
import Teadot from '../source/jsx/index';

const {Warpper, Grid, Button, Icon, Group, Tab, TabBar, TabPane, Form, Field } = Teadot;

class App extends React.Component {
	render() {
		return (
			<div>
				<Group type="warpper">
					<Warpper >
						<Grid gutter>
							<Grid.Item sizeBitty="20" offsetBitty="2">
								<Tab selectedIndex={2}>
									<TabBar>
										<TabBar.Item>Button</TabBar.Item>
										<TabBar.Item>Icon</TabBar.Item>
										<TabBar.Item>Form</TabBar.Item>
										<TabBar.Item>Card</TabBar.Item>
										<TabBar.Item>Note</TabBar.Item>
									</TabBar>
									<TabPane>
										<TabPane.Item>
											<h2>Button size</h2>
												<Button size="small" >small</Button>
												<Button ><Icon name="home" />星期五</Button>
												<Button size="medium" >medium</Button>
												<Button size="large" >large</Button>
											<h2>Button skin</h2>
												<Button skin="default" >default</Button>
												<Button skin="primary" >primary</Button>
												<Button skin="minor" >minor</Button>
												<Button skin="success" >success</Button>
												<Button skin="warning" >warning</Button>
												<Button skin="error" >error</Button>
											<h2>Button kind</h2>
												<Button skin="default" kind="hollow">default</Button>
												<Button skin="primary" kind="hollow">primary</Button>
												<Button skin="minor" kind="hollow">minor</Button>
												<Button skin="success" kind="hollow">success</Button>
												<Button skin="warning" kind="hollow">warning</Button>
												<Button skin="error" kind="hollow">error</Button>
											<h2>Button shape</h2>
												<Button size="small" skin="success" kind="hollow" shape="block">success</Button>
												<Button skin="success" kind="hollow" shape="block">success</Button>
												<Button size="medium" skin="success" kind="hollow" shape="block">success</Button>
												<Button size="large" skin="success" kind="hollow" shape="block">success</Button>
											<h2>Group Button</h2>
											<Group type="button">
												<Button size="small" type="submit" selected>Hello</Button>
												<Button size="small" skin="success">world</Button>
												<Button size="small" skin="success" kind="hollow">world</Button>
											</Group>
											<Group type="button">
												<Button size="small" type="submit" href="#">Hello</Button>
												<Button size="small" skin="success">world</Button>
												<Button size="small" skin="success" kind="hollow">world</Button>
											</Group>
										</TabPane.Item>
										<TabPane.Item>
											<h2>Aritcle Icon</h2>
												<p><a href="/"><Icon name="bookmark" /></a><span>星期五</span><Icon name="home" /><span>星期六</span></p>
											<h2>Button Icon</h2>
												<Button size="small"><Icon name="home" />星期五</Button>
												<Button ><Icon name="home" />星期五</Button>
												<Button size="large"><Icon name="home" />星期五</Button>
												<Button skin="success"><Icon name="chevronLeft" />星期五</Button>
												<Button skin="success" kind="hollow"><Icon name="chevronLeft" />星期五</Button>
											<h2>Icon kind</h2>
												<Icon name="chat" />
												<Icon name="chat" skin="default" />
												<Icon name="chat" skin="primary" />
												<Icon name="chat" skin="minor" />
												<Icon name="chat" skin="success" />
												<Icon name="chat" skin="warning" />
												<Icon name="chat" skin="error" />
											<h2>Icon name</h2>
												<Button ><Icon name="bookmark" />bookmark</Button>
												<Button ><Icon name="calendar" />calendar</Button>
												<Button ><Icon name="camera" />camera</Button>
												<Button ><Icon name="chat" />chat</Button>
												<Button ><Icon name="check" />check</Button>
												<Button ><Icon name="chevronDown" />chevronDown</Button>
												<Button ><Icon name="chevronLeft" />chevronLeft</Button>
												<Button ><Icon name="chevronRight" />chevronRight</Button>
												<Button ><Icon name="chevronUp" />chevronUp</Button>
												<Button ><Icon name="clock" />clock</Button>
												<Button ><Icon name="close" />close</Button>
												<Button ><Icon name="cloud" />cloud</Button>
												<Button ><Icon name="cog" />cog</Button>
												<Button ><Icon name="compose" />compose</Button>
												<Button ><Icon name="expand" />expand</Button>
												<Button ><Icon name="external" />external</Button>
												<Button ><Icon name="file" />file</Button>
												<Button ><Icon name="folder" />folder</Button>
												<Button ><Icon name="grid" />grid</Button>
												<Button ><Icon name="heart" />heart</Button>
												<Button ><Icon name="home" />home</Button>
												<Button ><Icon name="info" />info</Button>
												<Button ><Icon name="link" />link</Button>
												<Button ><Icon name="mail" />mail</Button>
												<Button ><Icon name="musicNote" />musicNote</Button>
												<Button ><Icon name="next" />next</Button>
												<Button ><Icon name="no" />no</Button>
												<Button ><Icon name="pause" />pause</Button>
												<Button ><Icon name="picture" />picture</Button>
												<Button ><Icon name="pin" />pin</Button>
												<Button ><Icon name="play" />play</Button>
												<Button ><Icon name="previous" />previous</Button>
												<Button ><Icon name="refresh" />refresh</Button>
												<Button ><Icon name="repost" />repost</Button>
												<Button ><Icon name="search" />search</Button>
												<Button ><Icon name="shoppingCart" />shoppingCart</Button>
												<Button ><Icon name="speakerVolume" />speakerVolume</Button>
												<Button ><Icon name="speaker" />speaker</Button>
												<Button ><Icon name="star" />star</Button>
												<Button ><Icon name="tag" />tag</Button>
												<Button ><Icon name="trash" />trash</Button>
												<Button ><Icon name="triangleDown" />triangleDown</Button>
												<Button ><Icon name="triangleLeft" />triangleLeft</Button>
												<Button ><Icon name="triangleRight" />triangleRight</Button>
												<Button ><Icon name="triangleUp" />triangleUp</Button>
												<Button ><Icon name="user" />user</Button>
												<Button ><Icon name="video" />video</Button>
												<Button ><Icon name="warning" />warning</Button>
										</TabPane.Item>
										<TabPane.Item>
											<Form>
												<Field labelText='Hello Input' />
												<Field labelText='Hello Input' disabled />
												<Field labelText='Hello Textarea' multiLine  />
												<Field labelText='Hello Textarea' multiLine disabled />
											</Form>
										</TabPane.Item>
										<TabPane.Item>Card</TabPane.Item>
										<TabPane.Item>Note</TabPane.Item>
									</TabPane>
								</Tab>
							</Grid.Item>
						</Grid>
					</Warpper>
				</Group>
			</div>
		);
	}
}

var mountNode = document.getElementById('example');
ReactDOM.render(<App />,mountNode);