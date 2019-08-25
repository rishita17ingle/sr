import React from 'react';
import{
	Text,
	View,
	Animated,
	VrButton,
	StyleSheet
} from 'react-vr';
import subjects from '../data/subjects';



// to be checked
export default class Info extends React.component {
	constructor(){
		super();

		this.state = {
			tilesOpen: false,
		};
	}


	//subject textual description
	// check view and text tags
	description(description) {
		return (
			<View>
				<Text style={styles.description}>
				  {description}
				</Text>
			</View>
				  );
	}



// tags of view and text to be checked
//info tiles on the left side are being displayed
	tiles(info){
		return(
			<View style ={styles.tiles}>
			  {info.map(({label,value}) =>(
			  	<View style={styles.tiles}>
			  	  <Text style={styles.tilesLabel} > {label} </Text>
			  	  <Text style={styles.tilesValue} > {label} </Text>
			  	</View>
			  	))}
			  	</View>
			  	);
	}


	render(){
		const {currentSubject} =this.props;
		const {tilesOpen} =this.state;

		return (
			<View 
				billboarding ={'on'}
				style={styles.info}>
				<View>
					<Text style ={styles.infoTitle}>
					  {currentSubject}
					</Text>
				</View>

				{tilesOpen ? this.tiles(subjects[currentSubject].info) :
				  this.description(subjects[currentSubject].description)}

				  <VrButton
				    onClick={() => this.setState ({tilesOpen: !tilesOpen})}>
				    <View style={styles.infoBtn}>
				      <Text style={styles.infoBtnLabel}>MORE INFO </Text>
				     </View>
				  </VrButton>
			</View>
			);
	}
}


const styles=StyleSheet.create({
	description:{
		fontSize: 20,
		color: 'white'
	},
	tiles={},
	tile: {
		height:40,
		backgroundColor: '#304FFE',
		margin:5,
		padding:10,
		flexDirection: 'row'
	},
	tilesLabel: {
		flex:7,
		fontSize:24,
		color='white'
	},
	tilesValue: {
		flex:3,
		textAlign:'right',
		fontSize:20,
		color:'white'
	},
	info: {
		width:500,
		minHeight:400,
		backgroundColor: 'transparent',
		position:'absolute',
		layoutOrigin: [0,0],
		borderColor: 'white',
		borderWidth:5,
		radius:10,
		padding:20,
		transform: [
		{rotateY:90},
		{translate: [-300,100,-850]}
		]
	},
	infoTitle: {
		fontSize:30,
		color:'white',
		textAlign:'center'
	}

});

