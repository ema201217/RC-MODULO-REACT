import React from "react";
import { Button, Form, FormGroup, Input, SearchBarContainer } from "./styled";

export const SearchBar = ({ onChange, onSubmit }) => {
  return (
    <SearchBarContainer>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input onChange={onChange} />
          <Button>🔍</Button>
        </FormGroup>
      </Form>
    </SearchBarContainer>
  );
};
