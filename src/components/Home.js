import React, { Component } from 'react'
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
        <br/>
        <br/>
        <h2 className="page-topic">Props</h2>
        <p className="sub-topic">color</p>

        <p>primary</p>
        <div className="button-group">
          <DisplayButton buttonText="Text" description="Normal"/>
          <DisplayButton buttonText="Text" description="Hover"/>
          <DisplayButton buttonText="Text" description="Disabled" disabled={true}/>
          <DisplayButton buttonText="Text" description="Pressed"/>
          <DisplayButton buttonText="Text" description="Loading"/>
        </div>

        <p>secondary</p>
        <div className="button-group">
          <DisplayButton buttonText="Text" description="Normal"/>
          <DisplayButton buttonText="Text" description="Hover"/>
          <DisplayButton buttonText="Text" description="Disabled" disabled={true}/>
          <DisplayButton buttonText="Text" description="Pressed"/>
          <DisplayButton buttonText="Text" description="Loading"/>
        </div>

        <br/>
        <br/>

        <p className="sub-topic">icon</p>
        <div className="button-group">
          <DisplayButton buttonText="Text" description="No Icon"/>
          <DisplayButton buttonText="Text" description="arrow-right"/>
          <DisplayButton buttonText="Text" description="check"/>
          <DisplayButton buttonText="Text" description="refresh"/>
        </div>

        <br/>
        <br/>

        <p className="sub-topic">disabled</p>
        <div className="button-group">
        <DisplayButton buttonText="Text" description="false"/>
          <DisplayButton buttonText="Text" description="true" disabled={true}/>
        </div>

        <br/>
        <br/>

        <h2 className="page-topic">loading</h2>
        <div className="button-group">
          <DisplayButton buttonText="Text" description="false"/>
          <DisplayButton buttonText="Text" description="true"/>
        </div>

        <br/>
        <br/>

      </>
    )
}

export default Home
