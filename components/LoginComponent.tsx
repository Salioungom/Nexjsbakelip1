"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
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
  margin-left: -18.5rem;
  justify-content: flex-start; 
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  margin-left: -18rem;
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
  margin-top: 1 rem;
  text-align: center;
  color: white; 
`;

const Link = styled.a`
  color: yellow;
  margin-top: -3rem;
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

const Login = () => {
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
  
    try {
      const response = await fetch('http://localhost:3002/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, mot_de_passe: password }), // Utiliser le nom de colonne correct pour le mot de passe
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de la connexion.');
      }
      
      // Gérer la connexion réussie ici
      router.push('/dashboard');
    } 
    catch (error) {
      console.error('Erreur de connexion :', error);
      alert('Erreur de connexion. Veuillez réessayer.');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleTermsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };
  
  return (
    <Container>
      <Title>Connectez-vous</Title>
      <FormContainer>
        <Form action="/api/login" method="POST" onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Field>
          <Field>
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Field>
          <CheckboxContainer>
            <Input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={handleTermsChange}
            />
            <CheckboxLabel htmlFor="terms">Gardez moi connecté</CheckboxLabel>
          </CheckboxContainer>
          <Button type="submit">Se connecter</Button>
        </Form>
      </FormContainer>
      <LinkContainer>
        <p><Link href="/oubliermdp">Mot de passe oublié?</Link></p>
      </LinkContainer>
      <LinkContainer>
        <p>vous n&#39;avez pas de compte? <Link href="/register">S&#39;inscrire</Link></p>
      </LinkContainer>
    </Container>
  );
}
export default Login;

// "use client";

// import { useState, FormEvent, ChangeEvent } from 'react';
// import styled from 'styled-components';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: #494C4F;
// `;

// const FormContainer = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Form = styled.form`
//   width: 100%;
// `;

// const Title = styled.h1`
//   margin-bottom: 1.5rem;
//   text-align: center;
//   color: white;
// `;

// const Field = styled.div`
//   margin-bottom: 1rem;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   color: #555;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-sizing: border-box;
// `;

// const CheckboxContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: -18.5rem;
//   justify-content: flex-start; 
//   margin-bottom: 1rem;
// `;

// const CheckboxLabel = styled.label`
//   margin-left: -18rem;
//   color: #555;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 0.75rem;
//   background-color: #494C4F;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #333;
//   }
// `;

// const LinkContainer = styled.div`
//   margin-top: 1rem;
//   text-align: center;
//   color: white; 
// `;

// const Link = styled.a`
//   color: yellow;
//   text-decoration: none;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const AdminLink = styled.p`
//   margin-top: 1rem;
//   color: #333;
//   text-align: center;
// `;

// const SvgIcon = styled.svg`
//   width: 35px;
//   height: 22px;
//   fill: none;
// `;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [termsAccepted, setTermsAccepted] = useState(false); // Ajoutez cet état
//   const router = useRouter();

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!termsAccepted) {
//       alert('Veuillez accepter les termes et conditions.');
//       return;
//     }

//     try {
//       console.log('Email:', email);  // Ajoutez ce log
//       console.log('Password:', password);  // Ajoutez ce log

//       const response = await axios.post('http://localhost:3002/api/login', {
//         email,
//         password
//       });

//       const data = response.data;

//       // Stocker le token JWT dans le localStorage
//       localStorage.setItem('token', data.token);

//       // Rediriger vers la page de dashboard après connexion réussie
//       router.push('/dashboard');
//     } catch (error) {
//       console.error('Erreur de connexion :', error);
//       alert('Erreur de connexion. Veuillez réessayer.');
//     }
//   };

//   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   const handleTermsChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setTermsAccepted(e.target.checked);
//   };

//   return (
//     <Container>
//       <Title>Connectez-vous</Title>
//       <FormContainer>
//         <Form action="/api/login" method="POST" onSubmit={handleSubmit}>
//           <Field>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               type="email"
//               id="email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//           </Field>
//           <Field>
//             <Label htmlFor="password">Mot de passe</Label>
//             <Input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </Field>
//           <CheckboxContainer>
//             <Input
//               type="checkbox"
//               id="terms"
//               checked={termsAccepted}
//               onChange={handleTermsChange}
//             />
//             <CheckboxLabel htmlFor="terms">Gardez moi connecté</CheckboxLabel>
//           </CheckboxContainer>
//           <Button type="submit">Se connecter</Button>
//         </Form>
//       </FormContainer>
//       <LinkContainer>
//         <p><Link href="/oubliermdp">Mot de passe oublié?</Link></p>
//       </LinkContainer>
//       <LinkContainer>
//         <p>vous n&#39;avez pas de compte? <Link href="/register">S&#39;inscrire</Link></p>
//       </LinkContainer>
//     </Container>
//   );
// };

// export default Login;
