import React from "react"
import Container, { ContainerProps } from "@material-ui/core/Container"
import Footer from "../Footer"
import InsetAvoidingView from "../InsetAvoidingView"

const InsetFooter: React.FC<{
  ContainerProps?: ContainerProps
  InsetAvoidingViewProps?: { className?: string }
}> = ({ children, ContainerProps, InsetAvoidingViewProps }) => (
  <Footer>
    <Container {...ContainerProps}>
      <InsetAvoidingView {...InsetAvoidingViewProps}>
        {children}
      </InsetAvoidingView>
    </Container>
  </Footer>
)

export default InsetFooter
