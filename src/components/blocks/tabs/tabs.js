import React, {useState} from "react";
import { TabButton, StyledTabs, Content } from "./styles";

import Description from '../../blocks/tabs/description/description'
import Character from '../../blocks/tabs/characters/characters'
import Properties from '../../blocks/tabs/properties/properties'

function Tabs({products}) {

  const tabs = [
    {
    title: 'Описание',
    content: <Description/>
  },
  {
    title: 'Характеристики',
    content: <Character character={products.charachter}/>
  },
  {
    title: 'Свойства',
    content: <Properties properties={products.properties}/>
  },
]

  const [activeTab, setActiveTab] = useState(0)
  // console.log(products[activeTab])

  return (
  <>
    <StyledTabs>
      
      {tabs &&
        tabs.length &&
        tabs.map((tab, index) => {
            return (
                <TabButton active onClick={() => setActiveTab(index)}>{tab.title}</TabButton>
            );
          }
        )
        }
    </StyledTabs>
    <Content product={products[activeTab]}>{tabs[activeTab].content}</Content>
  </>

  );
}

export default Tabs;
