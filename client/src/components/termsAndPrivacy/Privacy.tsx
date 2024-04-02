import React from "react";
import {
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material/";
import HexagonIcon from "@mui/icons-material/Hexagon";
import Link from "@mui/material/Link";

const Privacy = () => {
  return (
    <div>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        paddingX={3}
        paddingTop={3}
      >
        <Grid
          item
          sx={{
            flexGrow: 1,
            alignItems: "center",
          }}
          xs={12}
          md={8}
          lg={5}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              m={3}
              marginLeft={0}
              gutterBottom
            >
              {" "}
              Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
              Our Privacy Policy was last updated on April 2, 2024.
            </Typography>
            <Typography variant="body1" paragraph>
              Here’s a very brief summary with the key points we hope you take
              away from this Privacy Policy:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    We do not sell your personal data and have no intention to
                    do so in the future.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    It is up to you to decide what you want to share on this
                    website. You can use our website under a pseudonym for
                    example.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    When you use our website, even if you aren’t logged in, we
                    shall collect data using Google Analytics GA4, which allows
                    us to track your behaviour anonymously.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    You can choose to share additional information with us by
                    creating an account. We use this information for improving
                    our services and for keeping our website functional and
                    secure.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    You can update your account details, or delete it entirely
                    at any time.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    You can also ask us to give you a copy of the information
                    you’ve submitted.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Questions or concerns? Please contact us{" "}
                    <Link
                      href="mailto:info.afitpilot@gmail.com"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      info.afitpilot@gmail.com
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              Interpretation and Definitions
            </Typography>
            <Typography component="h3" variant="h5" gutterBottom>
              Interpretation
            </Typography>
            <Typography variant="body1" paragraph>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </Typography>
            <Typography component="h3" variant="h5" gutterBottom>
              Definitions
            </Typography>
            <Typography variant="body1" paragraph>
              For the purposes of these Terms and Conditions:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    “Affiliate” means an entity that controls, is controlled by
                    or is under common control with a party, where "control"
                    means ownership of 50% or more of the shares, equity
                    interest or other securities entitled to vote for election
                    of directors or other managing authority.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    “Account” means a unique account created for You to access
                    our Service or parts of our Service.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    “Company” (referred to as either "the Company", "We", "Us"
                    or "Our" in this Agreement) refers to TVA BE0772.508.196.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>“Country” refers to Belgium.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    “Content” refers to content such as text, images, or other
                    information that can be posted, uploaded, linked to or
                    otherwise made available by You, regardless of the form of
                    that content.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    “Device” means any device that can access the Service such
                    as a computer, a cell phone or a digital tablet.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    “Feedback” means feedback, innovations or suggestions sent
                    by You regarding the attributes, performance or features of
                    our Service.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>“Service” refers to the Website.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>“Product” refers to the Website.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    “Terms and Conditions” (also referred as "Terms") mean these
                    Terms and Conditions that form the entire agreement between
                    You and the Company regarding the use of the Service. This
                    Terms and Conditions Agreement was generated by TermsFeed
                    SaaS Terms and Conditions Generator.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    “Third-party Social Media Service” means any services or
                    content (including data, information, products or services)
                    provided by a third-party that may be displayed, included or
                    made available by the Service.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    “Website” refers to afitpilot.com, accessible from
                    www.afitpilot.com
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    “You” means the individual accessing or using the Service,
                    or the company, or other legal entity on behalf of which
                    such individual is accessing or using the Service, as
                    applicable.
                  </ListItemText>
                </ListItem>
              </List>
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (1) What information do we collect and why?
            </Typography>
            <Typography component="h3" variant="h5" gutterBottom>
              Personal information you disclose to us
            </Typography>
            <Typography variant="body1" paragraph>
              We collect personal information that you voluntarily provide to
              use when you register on the Services, express an interest in
              obtaining information about us or our Products and Services, when
              you participate in activities on the Services, or otherwise when
              you contact us.
            </Typography>
            <Typography component="h3" variant="h5" gutterBottom>
              Personal Information You Provide.
            </Typography>
            <Typography variant="body1" paragraph>
              The personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Usernames</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Age</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Weight</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Gender</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Femur breadths</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Humerus breadths</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Bicep circumferences</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Calf circumferences</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Body fat percentages</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Email addresses</ListItemText>
                </ListItem>
              </List>
            </Typography>
            <Typography variant="body1" paragraph>
              Sensitive Information. When necessary, with your consent or as
              otherwise permitted by applicable law, we process the following
              categories of sensitive information:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>Biometric data</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Information revealing race or ethnic origin
                  </ListItemText>
                </ListItem>
              </List>
            </Typography>
            <Typography variant="body1" paragraph>
              Consequently, it’s necessary for us to use your information to:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    send you your somatotype test results, if you request them
                    in the results screen or in the Settings section;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    send you account-related messages, such as password recovery
                    e-mails;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    identify you and ensure the security of your account – e.g.,
                    by verifying that you own the e-mail address linked to your
                    account;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    provide you with content and services relevant to you –
                    e.g., information for people with your somatotype type;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    help you connect with other members – e.g., by creating a
                    friend request automatically if someone tries to send you an
                    e-mail invite;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    respond to your questions or complaints, or to complaints
                    made about your use of our website.
                  </ListItemText>
                </ListItem>
              </List>
            </Typography>
            <Typography variant="body1" paragraph>
              All personal information that you provide to us must be true,
              complete, accurate, and you must notify us of any changes to such
              personal information.
            </Typography>
            <Typography component="h3" variant="h5" gutterBottom>
              Information automatically collected
            </Typography>
            <Typography variant="body1" paragraph>
              In Short: Some information - such as your browser, device
              characteristics - is collected automatically when you visit our
              Website.
            </Typography>
            <Typography variant="body1" paragraph>
              We automatically collect certain information when you visit, or
              navigate the Website. This information does not reveal your
              specific identity (like your name, contact information, or IP
              address) but may include device and usage information, such as
              your browser and device characteristics, operating system,
              language preference, referring URLs, device name, country,
              location, and other technical information. This information is
              primarily needed to maintain the security and operation of our
              Services, and for our internal analytics and reporting purposes.
            </Typography>
            <Typography variant="body1" paragraph>
              Like many businesses, we also collect information through cookies
              and similar technologies.
            </Typography>
            <Typography variant="body1" paragraph>
              The information we collect includes:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Log and Usage Data. Log and usage data is service-related,
                    diagnostic, usage, and performance information our servers
                    automatically collect when you access or use our Services
                    and which we record in log files. Depending on how you
                    interact with us, this log data may include device
                    information, browser typer.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Device Data. We collect device data about your computer,
                    phone, tablet, or other devices you use to access the
                    Services. Depending on the device used, this device data may
                    include information such as your location, browser type, and
                    operating system.{" "}
                  </ListItemText>
                </ListItem>
              </List>
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (2) How do we process your information?
            </Typography>
            <Typography variant="body1" paragraph>
              In Short: We process your information to provide, improve, and
              administer our Services, communicate with you, for security and
              fraud prevention, and to comply with law. We may also process your
              information for other purposes with your consent.
            </Typography>
            <Typography variant="body1" paragraph>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    To facilitate account creation and authentication and
                    otherwise manage user accounts. We may process your
                    information so you can create and log in to your account, as
                    well as keep your account in working order.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    To deliver and facilitate delivery of services to the user.
                    We may process your information to provide you with the
                    requested service.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    To save or protect an individuals vital interest. We may
                    process your information when necessary to save or protect
                    an individual’s vital interest, such as prevent harm.
                  </ListItemText>
                </ListItem>
              </List>
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (3) How Can You Manage Your Information?
            </Typography>
            <Typography variant="body1" paragraph>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>update your e-mail address;</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>edit your profile name;</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    change your optional personal information;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>delete your profile.</ListItemText>
                </ListItem>
              </List>
            </Typography>
            <Typography variant="body1" paragraph>
              If you delete your profile, we’ll anonymize your user record,
              removing your e-mail address, name, age, etc.
            </Typography>
            <Typography variant="body1" paragraph>
              We won’t, however, delete your posts in Discussions, messages you
              sent to other members, your responses to our tests and surveys,
              log records, and other similar data. We need to keep that data for
              a number of reasons, such as protecting other users’ right of
              freedom of expression, preserving the integrity of our research,
              or ensuring the security of our website, and the retention of this
              data is necessary for us to provide our services to you and
              others.
            </Typography>
            <Typography variant="body1" paragraph>
              If you decide to delete your profile, please make sure you first
              save any information you’d like to keep. Once the profile is gone,
              it’s gone.
            </Typography>
            <Typography variant="body1" paragraph>
              We’ll need to verify the authenticity of any data correction or
              removal request – so please make sure your account is always
              linked to an active e-mail address. We don’t ask you for data such
              as your full name, address, or date of birth – your e-mail address
              is the only real identifier – so if you lose access to the address
              linked to your account, we’ll have no way of verifying you own the
              account.
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (4) How Do We Secure Your Information?
            </Typography>
            <Typography variant="body1" paragraph>
              We take reasonable technical and organisational precautions to
              prevent the loss, misuse, or alteration of your personal
              information. For instance, we store this information on our secure
              (password and firewall-protected) servers, encrypt traffic to and
              from the website, and anonymize or pseudonymize personal
              information where possible.
            </Typography>
            <Typography variant="body1" paragraph>
              Still, we can’t guarantee complete security of data sent over the
              internet – for example, someone may discover a vulnerability in
              the encryption protocol that we use, your internet service
              provider may record the data you send, and so on. Please take care
              when posting sensitive data.
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (5) What legal bases do we rely on to process your information?
            </Typography>
            <Typography variant="body1" paragraph>
              In Short: We only process your personal information when we
              believe it is necessary and we have a valid legal reason (i.e.
              legal basis) to do so under applicable law, like with your
              consent, to comply with laws, to provide you with services to
              enter into or fulfil our contractual obligations, to protect your
              rights, or to fulfil our legitimate business interests.
            </Typography>
            <Typography variant="body1" paragraph>
              If you are located in the EU and UK, this section applies to you.
            </Typography>
            <Typography variant="body1" paragraph>
              The General Data Protection Regulation (GDPR) and UK GDPR require
              us to explain the valid legal bases we rely on in order to process
              your personal information. As such, we may rely on the following
              legal bases to process your personal information:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Consent. We may process your information if you have given
                    us permission (i.e. consent) to use your personal
                    information for a specific purpose. You can withdraw your
                    consent at any time.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Performance of a Contract. We may process your personal
                    information whe we believe it is necessary to fulfil our
                    contractual obligations to you, including proving our
                    Services or at your request prior to entering into a
                    contract with you.{" "}
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Legal Obligations. We may process your information where we
                    believe it is necessary fro compliance with our legal
                    obligations, such as to cooperate with a law enforcement
                    body or regulatory agency, exercise or defend our legal
                    rights, or disclose your information as evidence in
                    litigation in which we are involved.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Vital Interests. We may process your information where we
                    believe it is necessary to protect your vital interests or
                    the vital interests of a third party, such as situations
                    involving potential threats to the safety of any person.
                  </ListItemText>
                </ListItem>
              </List>
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (6) Do we use cookies and other tracking technologies?
            </Typography>
            <Typography variant="body1" paragraph>
              In Short: Most of the functionality on our website (such as
              viewing your somatotype test results or logging in) requires
              cookies. By using our website, you consent to our use of cookies
              as described in this policy.
            </Typography>
            <Typography variant="body1" paragraph>
              Our website uses persistent cookies. Persistent cookies will
              remain stored on your device until deleted, or until they reach a
              specified expiry date.
            </Typography>
            <Typography variant="body1" paragraph>
              Besides authentication, other website features made possible by
              persistent cookies include language selection, theme selection,
              menu preferences, internal site bookmarks or favorites, among many
              others. On your first visit, the website is presented in default
              mode. During your visit, you select your preferences and these
              preferences are remembered, through the use of the persistent
              cookie, the next time you visit the site.
            </Typography>
            <Typography variant="body1" paragraph>
              We use Google Analytics 4 to analyze the use of our website. These
              third party services may use cookies and other technologies to
              collect technical data on your behavior and your device (such as
              your device’s screen size). For further details, please see{" "}
              <Link
                href="https://policies.google.com/privacy"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Google’s privacy policy
              </Link>
              . You can also opt out of{" "}
              <Link
                href="https://support.google.com/analytics/answer/181881?hl=en"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Google Analytics tracking
              </Link>{" "}
              at any time.
            </Typography>
            <Typography variant="body1" paragraph>
              Most browsers allow you to reject all cookies, while some browsers
              allow you to reject just third party cookies. Blocking all cookies
              will, however, have a negative impact upon the usability of many
              websites, including ours.
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (7) How long do we keep your information?
            </Typography>
            <Typography variant="body1" paragraph>
              We keep your information only for as long as we need it to provide
              services to you and to fulfil the purposes described in this
              policy or as otherwise described in our Terms and Conditions. This
              also applies to any other parties that we share your information
              with.
            </Typography>
            <Typography variant="body1" paragraph>
              Here are some examples of categories of data along with their
              periods of retention:
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    activity logs, minus the above – 1 year;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    transient activity records, such as e-mail invites or
                    password reset requests – unlimited;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>account details – unlimited;</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    We’ll regularly delete accounts that aren’t linked to any
                    meaningful activity and have been inactive for more than two
                    years.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HexagonIcon />
                  </ListItemIcon>
                  <ListItemText>
                    content submitted to our website, such as comments or forum
                    posts – unlimited.
                  </ListItemText>
                </ListItem>
              </List>
            </Typography>
            <Typography variant="body1" paragraph>
              We’ll depersonalize your information or remove it entirely from
              our systems once we no longer need it to comply with our legal or
              regulatory obligations, or for other purposes described in this
              policy.
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (8) Do we collect information from minors?
            </Typography>
            <Typography variant="body1" paragraph>
              You may only use our website if you’re over the age at which you
              can provide consent to data processing under the laws of your
              country. Regardless of local laws, children under 13 aren’t
              allowed to use our website. If you’re a parent and you learn that
              your child is using our website, and you don’t want them to,
              please get in touch with us.
            </Typography>
            <Typography variant="body1" paragraph>
              As a small company, we don’t have the resources to verify and
              track parental consent – so unfortunately, if you’re below the age
              at which you can provide consent in your country, you aren’t
              entitled to use our website.
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (9) What are your privacy rights?
            </Typography>
            <Typography variant="body1" paragraph>
              In Short: In some regions, such as the European Economic Area
              (EEA), United Kingdom (UK), and Canada, you have rights that allow
              you greater access to and control over your personal information.
              You may review, change, or terminate your account at any time.
            </Typography>
            <Typography variant="body1" paragraph>
              In some regions (like EEA, UK, and Canada), you have certain
              rights under applicable data protection laws. These may include
              the right (i) to request access and obtain a copy of your personal
              information, (ii) to request rectification or erasure; (iii) to
              restrict the processing of your personal information; and (iv) if
              applicable, to data portability. In certain circumstances, you may
              also have the right to object to the processing of your personal
              information. You can make such a request by contacting us by using
              the contact details{" "}
              <Link
                href="mailto:info.afitpilot@gmail.com"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                info.afitpilot@gmail.com
              </Link>
              . We will consider and act upon any request in accordance with
              applicable data protection laws.
            </Typography>
            <Typography variant="body1" paragraph>
              If you are located in the EEA or UK and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your local data protection supervisory
              authority. You can find their contact details here: <br />{" "}
              <Link
                href="https://ec.europa.eu/newsroom/article29/items/612080"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                European Commission's article about data protection
              </Link>
              {"."}
            </Typography>
            <Typography variant="body1" paragraph>
              If you are located in Switzerland, the contact details for the
              data protection authorities are available here: <br />{" "}
              <Link
                href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Switzerland's article about data protection
              </Link>
              {"."}
            </Typography>
            <Typography variant="body1" paragraph>
              Withdrawing your consent: If we are relying on your consent to
              process your personal information, which may be express and/or
              implied consent depending on the applicable law, you have the
              right to withdraw your consent at any time. You can withdraw your
              consent at any time by contacting us by using the contact details{" "}
              <Link
                href="mailto:info.afitpilot@gmail.com"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                info.afitpilot@gmail.com
              </Link>
              .
            </Typography>
            <Typography variant="body1" paragraph>
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (10) Do we make updates to this notice?
            </Typography>
            <Typography variant="body1" paragraph>
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </Typography>
            <Typography variant="body1" paragraph>
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated ‘Revised’ date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (11) How can you contact us by this notice?
            </Typography>
            <Typography variant="body1" paragraph>
              If you have questions or comments about this notice, you may email
              us at{" "}
              <Link
                href="mailto:info.afitpilot@gmail.com"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                info.afitpilot@gmail.com
              </Link>
              .
            </Typography>
            <Typography component="h2" variant="h4" gutterBottom>
              (12) How can you review, update, or delete the data we collect
              from you?
            </Typography>
            <Typography variant="body1" paragraph>
              You have the right to request access to the personal information
              we collect from you, change that information, or delete it. To
              request to review, update, or delete your personal information,
              please visit your user profile on https://www.afitpilot.com.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Privacy;
