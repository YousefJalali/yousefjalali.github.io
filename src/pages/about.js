import React from "react";
import styled from "styled-components";

import { ICONS } from "../assets/ICONS";

export default class Home extends React.Component {
  state = {
    skills: [
      {
        id: "html",
        name: "HTML",
        percentage: 90
      },
      {
        id: "css",
        name: "CSS/SCSS",
        percentage: 90
      },
      {
        id: "js",
        name: "JavaScript",
        percentage: 75
      },
      {
        id: "react",
        name: "React",
        percentage: 70
      },
      {
        id: "rn",
        name: "React-Native",
        percentage: 70
      },
      {
        id: "redux",
        name: "Redux",
        percentage: 70
      },
      {
        id: "graphql",
        name: "GraphQL",
        percentage: 60
      },
      {
        id: "ui",
        name: "UI/UX",
        percentage: 70
      }
    ]
  };
  render() {
    return (
      <section style={{ padding: 0, overflow: "visible" }}>
        <Summary>
          <h3>Hello,</h3>
          <p>
            I’m a 26 year old self-taught developer from Morocco, I mainly work
            with React and React-Native. I have a serious passion for UI
            effects, animations and creating intuitive, dynamic user
            experiences. When I am not in front of my laptop, I travel, visit
            new places and discover different cultures.
          </p>
          <Card>
            <Service top>
              <IconWrapper>
                <Icon viewBox="0 0 70 70">
                  <path d={ICONS.fast.d} transform={ICONS.fast.transform} />
                </Icon>
              </IconWrapper>
              <h4>Fast</h4>
              <p>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </Service>
            <Service top>
              <IconWrapper>
                <Icon viewBox="0 0 70 70">
                  <path
                    d={ICONS.responsive.d}
                    transform={ICONS.responsive.transform}
                  />
                </Icon>
              </IconWrapper>
              <h4>Responsive</h4>
              <p>My layouts will work on any device, big or small.</p>
            </Service>
            <Service>
              <IconWrapper>
                <Icon viewBox="0 0 70 70">
                  <path
                    d={ICONS.intuitive.d}
                    transform={ICONS.intuitive.transform}
                  />
                </Icon>
              </IconWrapper>
              <h4>Intuitive</h4>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </Service>
            <Service>
              <IconWrapper>
                <Icon viewBox="0 0 70 70">
                  <path
                    d={ICONS.dynamic.d}
                    transform={ICONS.dynamic.transform}
                  />
                </Icon>
              </IconWrapper>
              <h4>Dynamic</h4>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </Service>
          </Card>
          <Card skills>
            <h3>Skills</h3>
            {this.state.skills.map(skill => (
              <Bar key={skill.id}>
                <Label>
                  <h4>{skill.name}</h4>
                </Label>
                <Loading percentage={skill.percentage} />
              </Bar>
            ))}
          </Card>
        </Summary>
      </section>
    );
  }
}

const Summary = styled.div`
  width: 100%;
  height: 50vh;
  padding: 2.5rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  text-align: center;
  position: relative;
`;

const Card = styled.div`
  position: absolute;
  top: ${props => (props.skills ? `calc(80% + 30rem + 5rem)` : "80%")};
  left: 5%;
  width: 90%;
  height: 30rem;
  border: 1px solid #eee;
  padding: 2rem 0;
  border-radius: 2rem;
  box-sizing: border-box;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Service = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: ${props => (props.top ? "2rem" : 0)};

  p {
    font-size: 0.8rem;
  }
`;

const IconWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.svg`
  height: 3.8rem;
`;

const Bar = styled.div`
  height: 2rem;
  width: 90%;
  background-color: #eee;
  position: relative;
`;

const Label = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 20%;
  background-color: ${props => props.theme.tertiary};
  color: ${props => props.theme.secondary};

  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 0.8rem;
  }
`;

const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 20%;
  height: 100%;
  width: ${props => (props.percentage * 80) / 100}%;
  background-color: ${props => props.theme.primary};
`;