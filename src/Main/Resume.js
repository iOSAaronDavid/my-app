import React from 'react';

const Resume = () => {
  const personalInfo = {
    name: 'Aaron Erickson',
    address: '3463 Georgian Ave, Lima, Ohio 45806',
    email: 'ios.aaron.david@email.com',
    linkin: 'www.linkedin.com/in/aaron-erickson-b317b9aa',
  };

  const education = [
    {
      degree: 'Web/Computer Programming',
      school: 'Rhodes State College',
      year: 'AUGUST 2011 - AUGUST 2013,  LIMA, OH',
    },
    {
      degree: 'Computer Science & Engineering No Degree',
      school: 'Lima OSU',
      year: 'AUGUST 2013 - DECEMBER 2013,   LIMA, OH',
    }
  ];

  const proficiencies = [
    {item: 'Demonstrated Experience with React, Javascript, ASP.NET and C# solutions'},
    {item: 'Demonstrated Experience with integration APIs services Rest and SOAP'},
    {item: 'Demonstrated Experience with DB2 and Oracle Databases, SQL'},
    {item: 'Demonstrated Experience with SCRUM methodologies and Test Driven Development'},
    {item: 'Demonstrated Experience with iOS and Android development'},
    {item: 'Demonstrated experience with languages Javascript, NodeJS, React, Java, C#, VB.NET, HTML, CSS, Objective-C, Swift, Kotlin, SOAP XML, and COBOL'},
    {item: 'Knowledge of Python and AngularJS'}
  ];

  const experience = [
    {
      position: 'Solutions Engineer',
      company: 'American Electric Power HQ',
      year: 'MAY 2017 - NOV 2023, 1 RIVERSIDE PLAZA,  COLUMBUS, OH',
      responsibilities: [
        {description: 'AWS Services Lambda, Dynamo DB, S3 storage, API Gateway, Cognito, Cloudwatch, SQS'},
        {description: 'C# and ASP.Net Applications'},
        {description: 'NodeJS with React For Agency Project'},
        {description: 'iOS and Android development using Swift, Java, and Kotlin'},
        {description: 'Maintain automated testing and automated deployment in Azure Devops and Jenkins'},
        {description: 'Google Assistant and Alexa development with NodejS'},
        {description: 'Exact Target/i2SMS SME'}
      ]
    },
    {
      position: 'Entry Level Software Developer',
      company: 'Experis',
      year: 'MAY 2016 - MAY 2017, 1 RIVERSIDE PLAZA,  COLUMBUS, OH',
      responsibilities: [
        {description: 'Develop and support C#.Net services for the complex event processing for automated text messages and emails'},
        {description: 'Configure automations for alert vendors Exact Target Marketing Cloud and i2SMS'},
        {description: 'Developed Mobile Alert Subscription Admin in ASP.NET'}
      ]
    },
    {
      position: 'iOS Developer',
      company: 'IGC Software',
      year: 'FEBRUARY 2015 - JANUARY 2016, 6432 E Main St #201, REYNOLDSBURG, OH',
      responsibilities: [
        {description: 'Developed, designed, and tested iOS and Android Applications'},
        {description: 'Tested and Developed .NET Web services'},
        {description: 'Trained QA team to use automated testing'}
      ]
    },
    {
      position: 'iOS Jr. Developer',
      company: 'Prenap',
      year: 'APRIL 2014 - DECEMBER 2014,  LIMA, OHIO',
      responsibilities: [
        {description: 'Developed, designed, and tested iOS applications'},
        {description: 'Managed iOS App Store Account'}
      ]
    }
  ];
  return React.createElement(
    'div',
    { className: 'resume' },
    React.createElement(
      'section',
      { className: 'personal-info' },
      React.createElement('h1', null, personalInfo.name),
      React.createElement('p', null, personalInfo.address),
      React.createElement('p', null, personalInfo.email),
      React.createElement('a', null, React.createElement("a", {href: "https://" + personalInfo.linkin}, "https://" + personalInfo.linkin))
    ),
    React.createElement(
      'section', 
      { className: 'proficiencies' },
      React.createElement('h2'), null, ''),
      React.createElement('ul'),
      proficiencies.map((item, index) =>
      React.createElement(
        'div',
      { key: index },
      React.createElement('li', null, item.item)
      )
    ),
    React.createElement(
      'section',
      { className: 'education' },
      React.createElement('h2', null, 'Education'),
      education.map((edu, index) =>
        React.createElement(
          'div',
          { key: index },
          React.createElement('h3', null, edu.degree),
          React.createElement('p', null, edu.school),
          React.createElement('p', null, edu.year)
        )
      )
    ),
    React.createElement(
      'section',
      { className: 'experience' },
      React.createElement('h2', null, 'Experience'),
      experience.map((exp, index) =>
        React.createElement(
          'div',
          { key: index },
          React.createElement('h3', null, exp.position),
          React.createElement('p', null, exp.company),
          React.createElement('p', null, exp.year),
          React.createElement('ul', null, exp.responsibilities.map((res, index) =>
            React.createElement(
              'div',
              { key: index },
              React.createElement('li', null, res.description)
            )
          )
          ),
        )
      )
    )    
  );
};

export default Resume;