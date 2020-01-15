import React from "react"
import Layout from "../components/Layout/layout"

const ContactPage = ({ data }) => {
  const contactData = data.contactJson
  const { contact_info } = contactData

  const contactCard = contact_info.map((item, idx) =>(
        <div key={idx} className="contact-grid-item">
          <img
            src={item.icon}
            alt={item.name}
            className="contact-icon"
          ></img>
    <p>
          {item.uri}
    </p>
        </div>
  ) )
  return (
    <Layout page={"contact"}>
      <h1 className="title">{contactData.title}</h1>
      <div className="text">
      {contactData.text}
      </div>
      <div className="contact-grid-container">
      {contactCard}
      </div>
    </Layout>
  )
}
export default ContactPage

export const query = graphql`
  query {
    contactJson {
      id
      title
      description
      text
      email
      phone
      twitter
      email_icon
      phone_icon
      twitter_icon
      contact_info {
        name
        uri
        icon
      }
    }
  }
`
