import React from "react";
import { Button, Throbber } from "@zenginehq/zengine-ui-react";
import { FirebaseProvider } from "@zenginehq/firebase";

interface PluginConfigField {
  id: string
  name: string
  help?: string
  type: string // @TODO restrict to available types
  restrict?: string // @TODO restrict to allowed types
}

interface PluginConfigPage {
  name: string
  fields: PluginConfigField[]
}

interface PluginConfigProps {
  /**
   * Settings page title
   */
  title?: string
  /**
   * Allow multiple plugin configurations
   */
  multi?: boolean
  /**
   * Allow toggling the plugin on and off
   */
  toggle?: boolean
  /**
   * Help text to display above settings page
   */
  help?: string
  /**
   * Plugin icon to display
   */
  icon?: string
  /**
   * Configuration pages.
   */
  pages?: PluginConfigPage[] // @TODO make required
}

// @TODO figure out how to render icons

const PluginConfig: React.FC<PluginConfigProps> = (props) => {
  console.log("prop", props);

  const createConfig = (): void => {

  };

  return (
    <FirebaseProvider LoadingStateComponent={<Throbber />}>
      <main className="p-3">
        <h2>
          {props.icon !== undefined && <i className={`icon-${props.icon}`} />}
          {props.title}
        </h2>

        {props.help !== undefined && (
          <small className="form-text text-muted">{props.help}</small>
        )}

        {props.multi === true && <Button theme="success" onClick={createConfig}>Create Configuration</Button>}

        {props.multi === true ? (<div className="p-2 border mt-2">
          <p>
            You don&apos;t have any configurations yet.
            <Button theme="link" onClick={createConfig}>Let&apos;s create one!</Button>
          </p>
        </div>) : (
          <div>@TODO display config page directly</div>
        )}
      </main>
    </FirebaseProvider>
  );
};

PluginConfig.defaultProps = {
  title: "Plugin Settings",
  multi: false,
  toggle: true,
  help: undefined,
  icon: undefined
};

export default PluginConfig;
