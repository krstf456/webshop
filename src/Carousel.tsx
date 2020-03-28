import React, {useState} from 'react';
import {
    Box,
    Carousel,
    Image
    
   } from 'grommet';
 import {  } from 'grommet-icons';



 interface Props {
     products: any
 }
export default function CarouselSection(props: Props) {
   

        
        return (
            <Box 
            margin={{ bottom: 'small'}}
            height='small'
            overflow="hidden"
            flex
            fill
            >
                <Carousel fill>
                    <Image fit="cover"  style={{width: '100%', height: '100%'}} src={props.products[0].img} />
                    <Image fit="cover" style={{width: '100%', height: '100%'}} src={props.products[1].img} />
                    <Image fit="cover" style={{width: '100%', height: '100%'}} src={props.products[2].img} />
                </Carousel>
            </Box>
            )
            
    
 }

 
