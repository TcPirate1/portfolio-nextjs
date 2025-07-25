import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components';

export const EmailNotification = ({
  name, email, message
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        You have received an email.
      </Preview>
      <Container style={container}>
        <Text style={paragraph}>Hi, you just received a message from {name}.</Text>
        <Text style={paragraph}>
          Their email is {email},
        </Text>
        <Text style={paragraph}>
          This is their message:
        </Text>
        <Text style={paragraph}>{message}</Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

EmailNotification.PreviewProps = {
  name: 'Alan',
  email: 'example@gmail.com',
  message: 'Hello World'
};

export default EmailNotification;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};
