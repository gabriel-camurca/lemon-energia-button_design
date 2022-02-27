import React from 'react'
import DisplayButton from './DisplayButton.js'
import "../styles/Home.css"

function Home() {
    return (
      <>
        <h1 className="page-title">Buttons</h1>
        <p className="title-description">O componente Button é utilizado para
          as ações de clique do usuário. Um elemento
          Button tem um comprimento mínimo
          (o apresentado nas figuras abaixo),
          mas ao colocá-lo dentro de um container com
          largura maior, ele deve preencher 100% do
          espaço disponível.</p>

        <h2 className="page-topic">Props</h2>
        <p className="sub-topic">color</p>

        <p>primary</p>
        <div className="button-group">
          <DisplayButton buttonText="Text" description="Normal/Hover/Pressed"/>
          <DisplayButton buttonText="Text" description="Disabled" disabled={true}/>
          <DisplayButton buttonText="Text" description="Loading" isLoading={true}/>
        </div>

        <p>secondary</p>
        <div className="button-group">
          <DisplayButton color="secondary" buttonText="Text" description="Normal/Hover/Pressed"/>
          <DisplayButton color="secondary" buttonText="Text" description="Disabled" disabled/>
          <DisplayButton color="secondary" buttonText="Text" description="Loading" isLoading={true}/>
        </div>

        <p className="sub-topic">icon</p>
        <div className="button-group">
          <DisplayButton buttonText="Text" description="No Icon"/>
          <DisplayButton buttonText="Text" icon="arrow-right" description="arrow-right"/>
          <DisplayButton buttonText="Text" icon="check" description="check"/>
          <DisplayButton buttonText="Text" icon="refresh" description="refresh"/>
        </div>

        <p className="sub-topic">disabled</p>
        <div className="button-group">
          <DisplayButton buttonText="Text" description="false"/>
          <DisplayButton buttonText="Text" description="true" disabled={true}/>
        </div>

        <h2 className="page-topic">loading</h2>
        <div className="button-group">
          <DisplayButton buttonText="Text" description="false"/>
          <DisplayButton buttonText="Text" description="true" isLoading={true}/>
        </div>

      </>
    )
}

export default Home
