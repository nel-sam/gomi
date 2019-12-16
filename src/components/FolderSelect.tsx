import React, { useState, FormEvent } from 'react';
import {
  IonInput,
  IonIcon,
  IonButton,
  IonAlert
} from '@ionic/react';
import { folderOpen } from 'ionicons/icons';
import { Plugins, FilesystemDirectory, FilesystemEncoding, ReaddirResult } from '@capacitor/core';

const { Filesystem } = Plugins;

const FolderSelect: React.FC = () => {
  const [folderPath, setFolderPath] = useState('');
  const [showAlert1, setShowAlert1] = useState(false);

  const handleStart = async () => {
    if (!folderPath) {
      setShowAlert1(true);
    }

    console.log(getFolderContents(folderPath));
  };

  const getFolderContents = async (path: string) => {
    const directory = FilesystemDirectory.Data;

    try {
      return await Filesystem.readdir({
        path: path,
        directory: directory
      });
    } catch(e) {
      console.error(`Unable to read dir ${directory}/${path}`, e);
    }
  }

  const handleChange = async (event: FormEvent<HTMLIonInputElement>) => {
    const value = event.currentTarget.value
                  ? event.currentTarget.value.toString()
                  : '';

    setFolderPath(value);
  };

  return <div>
          <IonInput
            onInput={handleChange}
            placeholder="Choose a folder to scan">
            <IonIcon
              className="folder-icon"
              slot="start"
              color="medium"
              icon={folderOpen}/>
          </IonInput>
          <IonButton
            color="primary"
            onClick={handleStart}>
            Start
              </IonButton>
          <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            header={'Error'}
            subHeader={'No folder selected'}
            message={'You must enter a folder to scan'}
            buttons={['OK']}
          />
        </div>
};

export default FolderSelect;