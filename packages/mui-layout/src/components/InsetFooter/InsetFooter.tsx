import React from "react"
import Container, { ContainerProps } from "@material-ui/core/Container"
import Footer from "../Footer"
import { createInsetAvoidingView } from "../InsetAvoidingView"

export const createInsetFooter = (Div?: any) => {
  const InsetAvoidingView = createInsetAvoidingView(Div)
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
  return InsetFooter
}

export default createInsetFooter()
