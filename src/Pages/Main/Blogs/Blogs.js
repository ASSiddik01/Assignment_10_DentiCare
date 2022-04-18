import React from "react";
import "./Blogs.css";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container>
      <h1 className=" text-center my-5">Question &#38; Answer</h1>
      <div className="qa">
        <h2>
          <span>Q1:</span> Difference between authorization and authentication?
        </h2>
        <p>
          <span>Ans:</span> <br />{" "}
          <span className="primary">Authorization:</span>The authorization
          process occurs once your identity has been successfully authenticated
          by the system, granting you access to resources such as information,
          files, databases, funds, locations, almost anything. A user's
          authorization determines how and up to what extent they can access the
          system.
          <br />
          <span className="primary">Athentication:</span> Authenticating your
          identity requires you to verify your credentials, such as your
          username or user ID. Using your credentials, the system determines
          whether you are who you claim to be. The system authenticates user
          identities in public and private networks using login passwords.
        </p>
      </div>
      <div className="qa">
        <h2>
          <span>Q2:</span> Why are you using firebase? What other options do you
          have to implement authentication?
        </h2>
        <p>
          <span>Ans:</span> I am using firebase as a user maintainance system. I
          think, firebase is a easist method to maintain web/mobile app user and
          also this is secure.
          <br />
          There have many option to implemant to authentication. Those are-
        </p>
        <ul>
          <li>Okta</li>
          <li>Passport</li>
          <li>AuthO</li>
          <li>JSON web token</li>
          <li>Amazon Cognito</li>
          <li>Microsoft Azure Active Directory</li>
        </ul>
      </div>
      <div className="qa">
        <h2>
          <span>Q3:</span> What other services does firebase provide other than
          authentication?
        </h2>
        <p>
          <span>Ans:</span> Generally firebase use for authentication or user
          management system. But firebase has other services. These services is
          -
        </p>
        <ul>
          <li>Hosting.</li>
          <li>Google Analytics.</li>
          <li>Cloud Messaging.</li>
          <li>Cloud Firestore</li>
          <li>Cloud Functions.</li>
          <li>Remote Config.</li>
        </ul>
      </div>
    </Container>
  );
};

export default Blogs;
