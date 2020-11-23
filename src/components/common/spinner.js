import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: ${({ relativeToParent }) =>
    relativeToParent ? "absolute" : "fixed"};
  top: 0%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  z-index: 9;
`;

const SpinnerElement = styled.div`
  display: inline-block;

  &:after {
    content: " ";
    display: block;
    width: 1em;
    height: 1em;
    margin: 0.2em;
    border-radius: 50%;
    border: 0.2em solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ relativeToParent }) => (
  <Wrapper className="busySpinner" relativeToParent={relativeToParent}>
    <SpinnerElement />
  </Wrapper>
);

Spinner.propTypes = {
  relativeToParent: PropTypes.bool
};

Spinner.defaultProps = {
  relativeToParent: false
};
export default Spinner;
