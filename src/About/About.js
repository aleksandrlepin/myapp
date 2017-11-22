import React, {Component} from 'react';
import './About.css';

class About extends React.Component {
    render () {
        return (
            <section className="content">
                <h2>About</h2>
                <div className="about">
                    <article className="about__goals">
                        <h3>Goals</h3>
                        <p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum. </p>
                    </article>
                    <article className="about__dreams">
                        <h3>Dreams</h3>
                        <p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum. </p>
                    </article>
                </div>
            </section>
        );
    }
}

export default About;
