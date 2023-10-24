import React, {useState} from "react";
import { TabButton, StyledTabs, Content } from "./styles";

import Description from '../../blocks/tabs/description/description'
import Character from '../../blocks/tabs/characters/characters'
import Properties from '../../blocks/tabs/properties/properties'

function Tabs({product}) {

  const tabs = [
    {
    title: 'Описание',
    content: <Description {...product}/>
  },
  {
    title: 'Характеристики',
    content: <Character 
    {...product}
    />
  },
  {
    title: 'Свойства',
    content: <Properties 
    {...product}
    />
  },
]

  const [activeTab, setActiveTab] = useState(0)

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
    <Content {...product}>{tabs[activeTab].content}</Content>
  </>

  );
}

export default Tabs;