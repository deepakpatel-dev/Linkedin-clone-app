import React, { Component } from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Main from './Main';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import userEvent from '@testing-library/user-event';

const Home = (props) => {
    return (
        <Container>
          {!props.user && <Redirect to='/' />}
            <Section>
                <h5>
                    <a>Hiring in a hurry</a>
                    <p>
                        Find talented pros in record time with Upwork and keep buisness moving
                    </p>
                </h5>
            </Section>
            <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Section = styled.div`
min-height: 50px;
padding: 16px 0;
box-sizing: content-box;
text-align: center;
text-decoration: underline;
display: flex;
justify-content: center;

h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps=(state)=>{
  return{
    user : state.userState.user
  }
}

// const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps)(Home);


