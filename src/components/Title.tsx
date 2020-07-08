import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "@emotion/styled"

const Content = styled.div`
  text-align: center;
`;

const Title: React.FC<{}> = () => {
  return (
    <Content>
      <h1>Hello TypeScript!</h1>
      <Button variant="contained">Test Button</Button>
    </Content>
  );
};

export default Title;
