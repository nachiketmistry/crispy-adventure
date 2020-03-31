import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeaderDiv = styled.div`
  line-height: 40px;
  height: 40px
  margin-bottom: 30px
  border-bottom: 1px solid white;
  padding: 0px 40px;
`

const StyledSpan = styled.span`
  color: white;
  display: inline-block;
  margin-right: 20px;
`

const Header = ({ siteTitle }) => (
  <header>
    <StyledHeaderDiv>
      <StyledSpan>
        <Link to="/">{siteTitle}</Link>
      </StyledSpan>
      <StyledSpan>
        <Link to="/gallery/">Gallery</Link>
      </StyledSpan>
    </StyledHeaderDiv>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
