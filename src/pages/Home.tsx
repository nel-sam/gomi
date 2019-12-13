import {
  IonButtons,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonAlert
} from '@ionic/react';
import { book, build, colorFill, grid, folderOpen } from 'ionicons/icons';
import React, { useState } from 'react';
import './Home.css';

const HomePage: React.FC = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  let folderPath: string;

  const handleStart = async () => {
    if (!folderPath) {
      setShowAlert1(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Gomi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonInput
              value="folderPath"
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
              header={'Oh oh'}
              subHeader={'No folder selected'}
              message={'You must enter a folder to scan'}
              buttons={['OK']}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
