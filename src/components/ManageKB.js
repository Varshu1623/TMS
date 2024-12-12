import React, { useState } from 'react';
import { Switch, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material';

const ManageKB = () => {
  const [settings, setSettings] = useState({
    displayKnowledgeBase: true,
    sortAlphabetically: true,
    allowComments: false,
    displayTags: true,
    displayAuthorInfo: false,
    displayLastUpdated: true,
    feedbackEmailRequired: true,
    feedbackAnonymous: false,
    displayTOC: 'Top',
    sortOrder: 'Modified time',
  });

  const handleSwitchChange = (name) => (event) => {
    setSettings({ ...settings, [name]: event.target.checked });
  };

  const handleRadioChange = (name) => (event) => {
    setSettings({ ...settings, [name]: event.target.value });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Access settings</h2>
      <p>Customize how your Articles are displayed in the Knowledge base.</p>

      <FormControlLabel
        control={<Switch checked={settings.displayKnowledgeBase} onChange={handleSwitchChange('displayKnowledgeBase')} />}
        label="Display your Knowledge base in your Help Center"
      />

      <FormControlLabel
        control={<Switch checked={settings.sortAlphabetically} onChange={handleSwitchChange('sortAlphabetically')} />}
        label="Sort categories/sections alphabetically"
      />

      <FormControlLabel
        control={<Switch checked={settings.allowComments} onChange={handleSwitchChange('allowComments')} />}
        label="Allow users to comment on articles"
      />

      <FormControlLabel
        control={<Switch checked={settings.displayTags} onChange={handleSwitchChange('displayTags')} />}
        label="Display tags in Articles"
      />

      <FormControlLabel
        control={<Switch checked={settings.displayAuthorInfo} onChange={handleSwitchChange('displayAuthorInfo')} />}
        label="Display author info"
      />

      <FormControlLabel
        control={<Switch checked={settings.displayLastUpdated} onChange={handleSwitchChange('displayLastUpdated')} />}
        label="Display last updated time stamp"
      />

      <FormControl component="fieldset" style={{ marginTop: '20px' }}>
        <FormLabel component="legend">Show feedback form on downvoting Article</FormLabel>
        <RadioGroup
          name="feedbackOption"
          value={settings.feedbackEmailRequired ? 'Required email' : 'Anonymous'}
          onChange={handleRadioChange('feedbackEmailRequired')}
        >
          <FormControlLabel value="Required email" control={<Radio />} label="Required email" />
          <FormControlLabel value="Anonymous" control={<Radio />} label="Anonymous" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" style={{ marginTop: '20px' }}>
        <FormLabel component="legend">Display table of contents (TOC) for Articles</FormLabel>
        <RadioGroup name="displayTOC" value={settings.displayTOC} onChange={handleRadioChange('displayTOC')}>
          <FormControlLabel value="Top" control={<Radio />} label="Top" />
          <FormControlLabel value="Side bar" control={<Radio />} label="Side bar" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" style={{ marginTop: '20px' }}>
        <FormLabel component="legend">Sort Articles</FormLabel>
        <RadioGroup name="sortOrder" value={settings.sortOrder} onChange={handleRadioChange('sortOrder')}>
          <FormControlLabel value="Modified time" control={<Radio />} label="Modified time" />
          <FormControlLabel value="Created time" control={<Radio />} label="Created time" />
          <FormControlLabel value="Custom Order" control={<Radio />} label="Custom Order" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ManageKB;
