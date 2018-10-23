import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './MyCarousel.css';

class MyCarousel extends Component{
    render(){
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="carouselImg" alt="恭喜您糟糕的网络让您看到了我们留下的小彩蛋" src="https://i.loli.net/2018/09/20/5ba3bedf0e9ad.png" />
                    {/*<Carousel.Caption>*/}
                        {/*<h3>First slide label</h3>*/}
                        {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carouselImg" alt="恭喜您糟糕的网络让您看到了我们留下的小彩蛋" src="https://huobi-1253283450.file.myqcloud.com/bit/banner/5658c14f-f1a8-4874-9447-75313fa6412d.jpg" />
                    {/*<Carousel.Caption>*/}
                        {/*<h3>Second slide label</h3>*/}
                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carouselImg" alt="恭喜您糟糕的网络让您看到了我们留下的小彩蛋" src="https://huobi-1253283450.file.myqcloud.com/bit/banner/423c2d9d-aa32-4aa5-b606-85308387b9bb.jpg" />
                    {/*<Carousel.Caption>*/}
                        {/*<h3>Third slide label</h3>*/}
                        {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default MyCarousel;