import React, { FunctionComponent } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage: FunctionComponent = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi, I&#39;m Chris Wilding.</h1>
    <p>
      I&#39;m a music loving, tea obsessed software engineer living and working
      in Manchester, UK.
    </p>
    <p>
      Some of the languages, software and tools I work with regularly are: AWS,
      CSS/SCSS, Docker, Git, GitHub, JavaScript, Jira, IntelliJ, Linux, macOS,
      Node.js, Python, React, Redux, Scala, Terraform, and Visual Studio Code.
    </p>
    <p>
      In the past I&#39;ve also worked with: Capybara, CentOS, Cucumber, Elixir,
      Express, GraphQL, MySQL, RSpec, Rails, Ruby, SQL, Sinatra, Troposphere,
      Ubuntu, Vagrant and Vim.
    </p>
    <p>In my spare time I love trying out new languages and tools.</p>
  </Layout>
)

export default AboutPage
