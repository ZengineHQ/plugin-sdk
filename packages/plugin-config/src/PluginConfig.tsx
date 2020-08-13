import React from 'react';

interface PluginConfigField {
  id: string
  name: string
  help?: string
  type: string // @TODO restrict to available types
}

interface PluginConfigPage {
  name: string
  fields: PluginConfigField[]
}

interface PluginConfigProps {
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

const PluginConfig: React.FC<PluginConfigProps> = (props) => {
  console.log('prop', props);
  return (
    <h2>hello frontend config</h2>
  );
}

PluginConfig.defaultProps = {
  multi: false,
  toggle: true,
  help: undefined,
  icon: 'emo-sunglasses'
}

export default PluginConfig;
