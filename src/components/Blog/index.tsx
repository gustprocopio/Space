import React from 'react'
import { BlogContainer, BlogWrapper, TextWrapper, AboutUs, Text, ImgContainer, GridBlog } from './styles'
import Img from '../../images/satellite-min.jpg'



export function Blog () {
    return (
        <BlogContainer>
            <BlogWrapper>
                <GridBlog>
                    <ImgContainer>
                        <img src={Img} alt='blog photo'/>
                    </ImgContainer>
                    <TextWrapper>
                        <AboutUs>ABOUT US</AboutUs>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            <br></br>
                            <br></br>
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
                            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                            Quisque rutrum.
                        </Text>
                    </TextWrapper>
                </GridBlog>
            </BlogWrapper>
        </BlogContainer> 
    )
}


