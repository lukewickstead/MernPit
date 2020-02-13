Example Initial State:

```js
    <QuestionOptionHorizontal
      handleInputChange={() => {}}
      isInvalid={true}
      isVisited={false}
      questionConfig={{
        name: 'FieldName',
        questions: [
          {
            title: '1',
            subTitle: 'Year',
            value: '1',
          },
          {
            title: '2',
            subTitle: 'Years',
            value: '2',
          },
          {
            title: '3',
            subTitle: 'Years',
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
    <QuestionOptionHorizontal
      handleInputChange={() => {}}
      isInvalid={true}
      isVisited={true}
      questionConfig={{
        name: 'FieldName',
        questions: [
          {
            title: '1',
            subTitle: 'Year',
            value: '1',
          },
          {
            title: '2',
            subTitle: 'Years',
            value: '2',
          },
          {
            title: '3',
            subTitle: 'Years',
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
    <QuestionOptionHorizontal
      handleInputChange={() => {}}
      isInvalid={false}
      isVisited={true}
      questionConfig={{
        name: 'FieldName',
        questions: [
          {
            title: '1',
            subTitle: 'Year',
            value: '1',
          },
          {
            title: '2',
            subTitle: 'Years',
            value: '2',
          },
          {
            title: '3',
            subTitle: 'Years',
            value: '3',
          },
        ],
      }}
      title='Example Question'
      value='3'
    />

```