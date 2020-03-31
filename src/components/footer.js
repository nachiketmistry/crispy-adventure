import React from "react"

export default function Footer(pros) {
  return (
    <footer>
      © {new Date().getFullYear()}
      {` `}
      <a href="https://www.splunk.com">Splunk</a>
    </footer>
  )
}
