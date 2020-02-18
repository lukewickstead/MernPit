Readonly Usage:

```js
<EditableSummaryRow
    editOnClickHandler={() => {}}
    handleInputChange={() => {}}
    id='ID'
    includeSeparator
    isInEdit={false}
    isValid={false}
    isVisited={true}
    maxLength={10}
    name='Name'
    onBlurHandler={() => {}}
    readonlyDisplayValue='Question Value'
    saveOnClickHandler={() => {}}
    stopEditOnClickHandler={() => {}}
    title='Question Title'
    validationMessage=''
    value='Question Value'
/>
```

Editable Initial Usage:

```js
<EditableSummaryRow
    editOnClickHandler={() => {}}
    handleInputChange={() => {}}
    id='ID'
    includeSeparator
    isInEdit={true}
    isValid={true}
    isVisited={false}
    maxLength={10}
    name='Name'
    onBlurHandler={() => {}}
    readonlyDisplayValue='Question Value'
    saveOnClickHandler={() => {}}
    stopEditOnClickHandler={() => {}}
    title='Question Title'
    validationMessage=''
    value='Question Value'
/>
```

Editable Valid Usage:

```js
<EditableSummaryRow
    editOnClickHandler={() => {}}
    handleInputChange={() => {}}
    id='ID'
    includeSeparator
    isInEdit={true}
    isValid={true}
    isVisited={true}
    maxLength={10}
    name='Name'
    onBlurHandler={() => {}}
    readonlyDisplayValue='Question Value'
    saveOnClickHandler={() => {}}
    stopEditOnClickHandler={() => {}}
    title='Question Title'
    validationMessage=''
    value='Question Value'
/>
```

Editable Invalid Usage:

```js
<EditableSummaryRow
    editOnClickHandler={() => {}}
    handleInputChange={() => {}}
    id='ID'
    includeSeparator
    isInEdit={true}
    isValid={false}
    isVisited={true}
    maxLength={10}
    name='Name'
    onBlurHandler={() => {}}
    readonlyDisplayValue='Question Value'
    saveOnClickHandler={() => {}}
    stopEditOnClickHandler={() => {}}
    title='Question Title'
    validationMessage='This is not valid'
    value='Question Value'
/>
```

Editable Option Usage:

```js
<EditableSummaryRow
    editOnClickHandler={() => {}}
    fieldType='FIELD_TYPE__OPTION'
    handleInputChange={() => {}}
    id='ID'
    includeSeparator
    isInEdit={true}
    isValid={true}
    isVisited={true}
    maxLength={10}
    name='Name'
    onBlurHandler={() => {}}
    readonlyDisplayValue='Question Value'
    saveOnClickHandler={() => {}}
    stopEditOnClickHandler={() => {}}
    title='Question Title'
    validationMessage=''
    value='Question Value'
          questionConfig={{
        name: 'FieldName',
        questions: [
          {
            title: '1',
            value: '1',
          },
          {
            title: '2',
            value: '2',
          },
          {
            title: '3',
            value: '3',
          },
        ],
      }}
/>
```