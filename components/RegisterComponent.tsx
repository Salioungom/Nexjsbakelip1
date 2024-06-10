"use client";

import { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';



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
  margin-left: -19.08rem;
  justify-content: flex-start; 
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
margin-left:-18rem;
  
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
export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!termsAccepted) {
      alert('Veuillez accepter les termes et conditions.');
      return;
    }
  
    const requestData = { nom: fullName, email, mot_de_passe: password };
    console.log('Sending request data:', requestData);
  
    const response = await fetch('http://localhost:3002/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
  
    const data = await response.json();
    console.log(data);
    router.push('/');
  };
    
  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="fullName">Nom </Label>
            <Input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Field>
          <CheckboxContainer>
            <Input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <CheckboxLabel htmlFor="terms">Accepter les termes et la politique</CheckboxLabel>
          </CheckboxContainer>
          <Button type="submit">S&#39;inscrire</Button>
        </Form>
      </FormContainer>
      <LinkContainer>
        <p>Avez-vous déjà un compte? <Link href="/">Connectez-vous</Link></p>
      </LinkContainer>
    </Container>
  );
}