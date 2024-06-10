"use client";

import { useState, FormEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #494C4F;
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  text-align: center;
  color: white;
`;

const Field = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  margin-left: 0.5rem;
  color: #555;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #494C4F;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const LinkContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: white; 
`;

const Link = styled.a`
  color: yellow;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const AdminLink = styled.p`
  margin-top: 1rem;
  color: #333;
  text-align: center;
`;

const SvgIcon = styled.svg`
  width: 35px;
  height: 22px;
  fill: none;
`;

export default function LoginOublier({
  children,
}: {
  children: React.ReactNode
}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, email, password }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <Container>
      <Title>
        <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M2.66602 2.66624H29.3286V29.3288L2.66602 2.66624Z" fill="white"/>
          <path fillOpacity="0.5" d="M10 10 H 90 V 90 H 10 L 10 10"/>
          <path d="M2.66602 2.66624H15.9973L2.66602 29.3288V2.66624Z" fill="white"/>
        </SvgIcon>
        RED PRODUCT
      </Title>
      <FormContainer>
        <AdminLink>Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.</AdminLink>
        <Form onSubmit={handleSubmit}>
        
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Button type="submit">Envoyer</Button>
        </Form>
      </FormContainer>
      <LinkContainer>
        <p>Revinir à la <Link href="/">Connexion</Link></p>
      </LinkContainer>
    </Container>
  );
}
