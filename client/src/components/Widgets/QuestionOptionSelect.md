Example Initial State:

```js
    <QuestionOptionSelect
      handleInputChange={() => {}}
      isInvalid={true}
      isVisited={false}
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
      title='Example Question'
      value=''
    />

```


Example Invalid:

```js
    <QuestionOptionSelect
      handleInputChange={() => {}}
      isInvalid={true}
      isVisited={true}
      questionConfig={{
        name: 'FieldName',
        questions: [
          {
            title: 'Please Select',
            value: '',
          },
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
      title='Example Question'
      value=''
    />

```



Example Valid:

```js
    <QuestionOptionSelect
      handleInputChange={() => {}}
      isInvalid={false}
      isVisited={true}
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
      title='Example Question'
      value='3'
    />

```