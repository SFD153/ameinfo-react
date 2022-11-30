/**
 *
 * PreHeader
 *
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from 'components/Logo';
// import OwlCarousel from 'react-owl-carousel';
// import { MyCarousel3 } from 'components/OwlCarouselConfig';
import { Link } from 'react-router-dom';
// import agent from 'utils/agent';
// import isEmpty from 'lodash/isEmpty';

/* eslint-disable react/prefer-stateless-function, react/prop-types */
export default class PreHeader extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //     params: {
  //       select: 'title,slug',
  //       perPage: 9,
  //     },
  //   };
  // }

  // async componentDidMount() {
  //   const { params } = this.state;
  //   let posts;
  //
  //   try {
  //     const response = await agent.get('/posts').query(params);
  //     posts = response.body.results;
  //   } catch (e) {
  //     posts = [];
  //   }
  //
  //   this.setState({ posts });
  // }
  //
  // renderSlider(posts) {
  //   return (
  //     <OwlCarousel className="owl-carousel" id="myCarousel3" {...MyCarousel3}>
  //       {posts.map(post => (
  //         <div className="item" key={post.id}>
  //           <Link to={`/post/${post.slug}`} className="scale">
  //             <p className="small_txt ">{post.title}</p>
  //           </Link>
  //         </div>
  //       ))}
  //     </OwlCarousel>
  //   );
  // }

  render() {
    // const { posts } = this.state;
    return (
      <section className="logo_sec" id="post_logosec">
        <Container>
          <Row>
            <Col md="3">
              <Link to="/">
                <Logo />
              </Link>
            </Col>
            {/* <Col md="9">{isEmpty(posts) ? null : this.renderSlider(posts)}</Col> */}
          </Row>
        </Container>
      </section>
    );
  }
}
