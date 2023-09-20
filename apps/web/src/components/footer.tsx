import classnames from "classnames";
import Image from "next/image";
import * as React from "react";
import { Anchor } from "./anchor";
import { Text } from "./text";

type FooterElement = React.ElementRef<"footer">;
type RootProps = React.ComponentPropsWithoutRef<"footer">;

export const Footer = React.forwardRef<FooterElement, Readonly<RootProps>>(
  ({ className, ...props }, forwardedRef) => (
    <footer
      className={classnames(
        "flex h-[80px] items-center justify-center text-center",
        className
      )}
      ref={forwardedRef}
      {...props}
    >
      <Text className="inline-flex items-center gap-2">
        Created by{" "}
        <Anchor
          appearance="white"
          className="inline-flex items-center gap-2"
          href="https://twitter.com/bukinoshita"
          target="_blank"
        >
          <Image
            alt=""
            className="border-slate-7 inline-block rounded-full border"
            height="20"
            src="/static/bu.jpg"
            width="20"
          />
          Bu Kinoshita
        </Anchor>{" "}
        and{" "}
        <Anchor
          appearance="white"
          className="inline-flex items-center gap-2"
          href="https://twitter.com/zenorocha"
          target="_blank"
        >
          <Image
            alt=""
            className="border-slate-7 inline-block rounded-full border"
            height="20"
            src="/static/zeno.jpg"
            width="20"
          />
          Zeno Rocha
        </Anchor>
      </Text>
    </footer>
  )
);

Footer.displayName = "Footer";