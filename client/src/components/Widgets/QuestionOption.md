Example Initial State:

```js
    <QuestionOption
      handleInputChange={() => {}}
      isInvalid={true}
      isVisited={false}
      questionConfig={{
    name: 'FieldName',
    questions: [
      {
        title: 'Yes',
        value: 'YES',
      },
      {
        title: 'No',
        value: 'NO',
      },
    ],
  }}
      title='Example Question'
      value=''
    />

```


Example Invalid:

```js
    <QuestionOption
      handleInputChange={() => {}}
      isInvalid={true}
      isVisited={true}
      questionConfig={{
    name: 'FieldName',
    questions: [
      {
        title: 'Yes',
        value: 'YES',
      },
      {
        title: 'No',
        value: 'NO',
      },
    ],
  }}
      title='Example Question'
      value=''
    />

```



Example Valid:

```js
    <QuestionOption
      handleInputChange={() => {}}
      isInvalid={false}
      isVisited={true}
      questionConfig={{
    name: 'FieldName',
    questions: [
      {
        title: 'Yes',
        value: 'YES',
      },
      {
        title: 'No',
        value: 'NO',
      },
    ],
  }}
      title='Example Question'
      value='NO'
    />

```