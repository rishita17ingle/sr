import 'react-native';
import 'react-vr';
import React from 'react';
import Index from '../index.vr.js';
import {Location} from 'react-360-web';


import renderer from 'react-test-renderer';

//to create DOM tree
it('renders correctly', () => {
	const tree = renderer.create(
        <Index />
		);
});















// cylindrical surface 
import {Surface} from 'react-360-web';
const myCylinderSurface=new surface(
	1000, //width
	600, //height
	Surface.SurfaceShape.Cylinder
	);



// mounting 2d objects to 3d , onto the surface
r360.render.ToSurface(
	r360.createRoot('try_react'),
	r360.getDefaultSurface(),
	'default' // optional, just a name to render to the surface , 
			  //can be referred to attach screen in the environment.
	);



// mounting 3d objects to a Default Location
r360.renderToLocation(
	r360.createRoot('React3DView'),
	r360.getDefaultLocation(),
	);


// creating a location for mounting 3d object to that location
// create a location 2 meters in front of the user , and one meter down
const location =new Location([0, -1, -2]);

//render to this location
vr.renderToLocation(
	vr.createRoot('My3DView')),
	location,
	);



//create a location 2 meters out,
//which is rotated 90 degrees around the y-axis (related to creating location for 3d object)
new Location([0,0,-2],[0,Math.PI/2,0]);




