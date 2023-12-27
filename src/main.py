import openai
openai.api_key='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'

completion = openai.ChatCompletion.create(
  model="gpt-3.5-turbo", 
  messages=[{"role": "user", "content": "give me the 5 newest hotels in sanfransico in json format with some helpful metadata for building a site"}]
)

print(completion)