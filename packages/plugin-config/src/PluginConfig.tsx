import React from 'react';
import { Button } from '@zenginehq/zengine-ui-react/lib';

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
  console.log('prop', props);

  const createConfig = () => {

  };

  return (
    <main className="p-3">
      <h2>
        {props.icon && <i className={`icon-${props.icon}`} />}
        {props.title}
      </h2>

      {props.multi && <Button theme="success" onClick={createConfig}>Create Configuration</Button>}

      {props.multi ? (<div className="p-2 border mt-2">
        <p>
          You don't have any configurations yet.
          <Button theme="link" onClick={createConfig}>Let's create one!</Button>
        </p>
      </div>) : (
        <div>@TODO display config page directly</div>
      )}
    </main>
  );
}

PluginConfig.defaultProps = {
  title: 'Plugin Settings',
  multi: false,
  toggle: true,
  help: undefined,
  icon: 'emo-sunglasses'
}

export default PluginConfig;
