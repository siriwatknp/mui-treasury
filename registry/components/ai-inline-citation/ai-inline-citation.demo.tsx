"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  InlineCitation,
  InlineCitationCard,
  InlineCitationCarousel,
  InlineCitationCarouselContent,
  InlineCitationCarouselItem,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationCarouselPrev,
  InlineCitationCarouselNext,
  InlineCitationSource,
  InlineCitationQuote,
} from "./ai-inline-citation";

export default function AIInlineCitationDemo() {
  const sources = [
    "https://react.dev/learn/thinking-in-react",
    "https://react.dev/learn/state-a-components-memory",
    "https://react.dev/learn/render-and-commit",
  ];

  const detailedSources = [
    {
      title: "Thinking in React",
      url: "https://react.dev/learn/thinking-in-react",
      description:
        "Learn how to think about building user interfaces with React's component model.",
      quote:
        "React can change how you think about the designs you look at and the apps you build.",
    },
    {
      title: "State: A Component's Memory",
      url: "https://react.dev/learn/state-a-components-memory",
      description:
        "Components often need to change what's on the screen as a result of an interaction.",
      quote: "State is like a component's memory.",
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: 768, mx: "auto", p: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Inline Citation Demo
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Hover over the citation badges to see source cards.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            React makes it painless to create interactive UIs by using a
            declarative approach
            <InlineCitation>
              <InlineCitationCard sources={sources}>
                <InlineCitationCarousel>
                  <InlineCitationCarouselHeader>
                    <InlineCitationCarouselPrev />
                    <InlineCitationCarouselIndex />
                    <InlineCitationCarouselNext />
                  </InlineCitationCarouselHeader>
                  <InlineCitationCarouselContent>
                    {detailedSources.map((source, index) => (
                      <InlineCitationCarouselItem key={index}>
                        <InlineCitationSource
                          title={source.title}
                          url={source.url}
                          description={source.description}
                        />
                        {source.quote && (
                          <InlineCitationQuote>
                            {source.quote}
                          </InlineCitationQuote>
                        )}
                      </InlineCitationCarouselItem>
                    ))}
                  </InlineCitationCarouselContent>
                </InlineCitationCarousel>
              </InlineCitationCard>
            </InlineCitation>
            . This design philosophy helps developers build maintainable
            applications.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Components are the building blocks of React applications. They let
            you split the UI into independent, reusable pieces
            <InlineCitation>
              <InlineCitationCard sources={[sources[0]]}>
                <InlineCitationSource
                  title="React Components"
                  url="https://react.dev/learn/your-first-component"
                  description="Components are one of the core concepts of React. They are the foundation of every React application."
                />
              </InlineCitationCard>
            </InlineCitation>
            , and think about each piece in isolation.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
