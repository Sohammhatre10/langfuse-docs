export const openApiSpecClient = `
openapi: 3.0.1
info:
  title: langfuse
  version: ''
paths:
  /api/public/scores:
    post:
      description: Add a score to the database
      operationId: score_create
      tags:
        - Score
      parameters: []
      responses:
        '200':
          description: ''
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Score'
      security:
        - BearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateScoreRequest'
components:
  schemas:
    CreateScoreRequest:
      title: CreateScoreRequest
      type: object
      properties:
        traceId:
          type: string
        traceIdType:
          $ref: '#/components/schemas/TraceIdType'
        name:
          type: string
        value:
          type: integer
        observationId:
          type: string
      required:
        - traceId
        - name
        - value
    Score:
      title: Score
      type: object
      properties:
        id:
          type: string
        traceId:
          type: string
        name:
          type: string
        value:
          type: integer
        observationId:
          type: string
        timestamp:
          type: string
          format: date-time
      required:
        - id
        - traceId
        - name
        - value
        - timestamp
    TraceIdType:
      title: TraceIdType
      type: string
      enum:
        - LANGFUSE
        - EXTERNAL
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
`;
