import React, { useState, FormEvent } from 'react';
import {
  IonInput,
  IonIcon,
  IonButton,
  IonAlert
} from '@ionic/react';
import { folderOpen } from 'ionicons/icons';

interface FolderSelectProps {
  folderPath: string;
}

const FolderSelect: React.FunctionComponent<FolderSelectProps> = () => {
  const [folderPath, setFolderPath] = useState('');
  const [showAlert1, setShowAlert1] = useState(false);

  const handleStart = async () => {
    if (!folderPath) {
      setShowAlert1(true);
    }
  };

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