import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import manifest from '../manifest.json';


import { restartCommands } from './commands';




const Restart: Plugin = {
   ...manifest,

   onStart() {
      this.commands = restartCommands
   },

   onStop() {
      this.commands = []
   },

};

registerPlugin(Restart);
