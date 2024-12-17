import { Button, Rows, Text } from "@canva/app-ui-kit";
import { requestOpenExternalUrl } from "@canva/platform";
import { FormattedMessage, useIntl } from "react-intl";
import * as styles from "styles/components.css";
import { useAddElement } from "utils/use_add_element";

export const App = () => {
  const addElement = useAddElement();

  const onClick = () => {
    addElement({
      type: "text",
      children: ["Hello world!"],
    });
  };

  const intl = useIntl();

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Text>
          <FormattedMessage
            defaultMessage="
              Lets make Calendars!
            "
            description="Instructions for how to make changes to the app. Do not translate <code>src/app.tsx</code>."
            values={{
              code: (chunks) => <code>{chunks}</code>,
            }}
          />
        </Text>
        <Button variant="primary" onClick={onClick} stretch>
          {intl.formatMessage({
            defaultMessage: "Do something cool",
            description:
              "Button text to do something cool. Creates a new text element when pressed.",
          })}
        </Button>
      </Rows>
    </div>
  );
};
